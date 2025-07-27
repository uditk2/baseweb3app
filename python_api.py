# Python API example
from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/api/python', methods=['GET'])
def hello_python():
    return jsonify({
        "message": "Hello from Python!",
        "python_version": "3.x",
        "status": "running"
    })

@app.route('/api/python/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy",
        "service": "python-api"
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
