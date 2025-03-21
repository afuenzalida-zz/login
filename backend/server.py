from flask import Flask, request, jsonify
from flask_cors import CORS
import hashlib

app = Flask(__name__)
CORS(app)

# Usuario y contraseña permitidos
VALID_USER = "admin"
VALID_PASSWORD = "123"
VALID_PASSWORD_HASH = hashlib.sha256(VALID_PASSWORD.encode()).hexdigest()

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    # Validamos credenciales
    if username == VALID_USER and hashlib.sha256(password.encode()).hexdigest() == VALID_PASSWORD_HASH:
        return jsonify({"success": True, "username": username, "password": VALID_PASSWORD})
    else:
        return jsonify({"success": False, "message": "Credenciales incorrectas."}), 401

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
