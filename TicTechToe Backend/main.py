from supabase_client import supabase_client
from flask import Flask, request, jsonify
import os
from utils.crypto import encrypt, decrypt
app = Flask(__name__)

CRYPTO_KEY = os.getenv("CRYPTO_KEY")


@app.route('/user/register-seed', methods=['POST'])
def register_voice():
    post_data = request.json
    encrypted_seed = encrypt(post_data['seed'], CRYPTO_KEY)
    data, count = supabase_client.table('users').insert(
        {'email': post_data['email'], 'seed': encrypted_seed}
    ).execute()

    return jsonify({'status': 'success', 'message': 'User registered successfully', 'data': data})


@app.route('/user/authenticate-seed', methods=['POST'])
def authenticate_seed():
    post_data = request.json
    data, count = supabase_client.table('users').select(
        'seed'
    ).eq('email', post_data['email']).execute()

    if count == 0:
        return jsonify({'status': 'error', 'message': 'User not found'})

    decrypted_seed = decrypt(data[1][0]['seed'], CRYPTO_KEY)

    if decrypted_seed == post_data['seed']:
        return jsonify({'status': 'success', 'message': 'User authenticated successfully'})
    else:
        return jsonify({'status': 'error', 'message': 'User authentication failed'})


if __name__ == '__main__':
    app.run()
