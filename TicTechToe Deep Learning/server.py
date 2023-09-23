from model import compare_embeddings
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/compare', methods=['POST'])
def compare():
    if request.method == 'POST':
        person1 = request.form['person1']
        person1Other = request.form['person1Other']
        person2 = request.form['person2']
        ob = compare_embeddings(person1, person1Other, person2)
        return jsonify(ob)

