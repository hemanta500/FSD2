from flask import Flask, request, jsonify
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    get_jwt_identity
)
import base64
import os

# ================================
# Flask App Initialization
# ================================
app = Flask(__name__)

# Secret key for JWT
app.config["JWT_SECRET_KEY"] = "super-secret-key"

# Initialize JWT
jwt = JWTManager(app)

# ================================
# In-memory user database
# ================================
users = {
    "admin": {
        "password": "admin123",
        "role": "admin"
    },
    "john": {
        "password": "john123",
        "role": "user"
    }
}

# ================================
# Root Route
# ================================
@app.route("/")
def home():
    return jsonify({
        "message": "Authentication Experiment Running",
        "routes": [
            "/basic-protected (Basic Auth)",
            "/token-login (POST)",
            "/token-protected (x-auth-token header)",
            "/jwt-login (POST)",
            "/jwt-protected (Bearer Token)"
        ]
    })


# ================================
# 1️⃣ BASIC AUTHENTICATION
# ================================
@app.route("/basic-protected")
def basic_protected():

    auth = request.authorization

    # Check if auth exists
    if auth is None:
        return jsonify({"error": "Missing Basic Auth"}), 401

    username = auth.username
    password = auth.password

    user = users.get(username)

    if user and user["password"] == password:
        return jsonify({
            "message": f"Basic Auth Success. Welcome {username}!"
        })

    return jsonify({"error": "Invalid credentials"}), 401


# ================================
# 2️⃣ SIMPLE TOKEN AUTHENTICATION
# ================================

# Login endpoint
@app.route("/token-login", methods=["POST"])
def token_login():

    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    user = users.get(username)

    if user and user["password"] == password:

        token = base64.b64encode(username.encode()).decode()

        return jsonify({
            "message": "Token generated successfully",
            "token": token
        })

    return jsonify({"error": "Invalid credentials"}), 401


# Protected endpoint
@app.route("/token-protected")
def token_protected():

    token = request.headers.get("x-auth-token")

    if not token:
        return jsonify({"error": "Missing Token"}), 401

    try:
        username = base64.b64decode(token).decode()

        if username in users:
            return jsonify({
                "message": f"Token Auth Success. Welcome {username}!"
            })

    except Exception:
        pass

    return jsonify({"error": "Invalid Token"}), 401


# ================================
# 3️⃣ JWT AUTHENTICATION
# ================================

# Login endpoint
@app.route("/jwt-login", methods=["POST"])
def jwt_login():

    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    user = users.get(username)

    if user and user["password"] == password:

        access_token = create_access_token(identity=username)

        return jsonify({
            "message": "JWT generated successfully",
            "access_token": access_token
        })

    return jsonify({"error": "Invalid credentials"}), 401


# Protected route
@app.route("/jwt-protected")
@jwt_required()
def jwt_protected():

    current_user = get_jwt_identity()

    return jsonify({
        "message": f"JWT Auth Success. Welcome {current_user}!"
    })


# ================================
# Start Server (Local + Render)
# ================================
if __name__ == "__main__":

    port = int(os.environ.get("PORT", 10000))

    app.run(
        host="0.0.0.0",
        port=port
    )