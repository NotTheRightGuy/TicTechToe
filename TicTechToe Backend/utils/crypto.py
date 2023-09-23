from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.backends import default_backend
from base64 import urlsafe_b64encode, urlsafe_b64decode


def key_derivation(input_key):
    """
    Derive a 256-bit key from the provided input_key.
    This is for ensuring the key is of the correct length and format for Fernet.
    """
    digest = hashes.Hash(hashes.SHA256(), backend=default_backend())
    digest.update(input_key.encode('utf-8'))
    return urlsafe_b64encode(digest.finalize())


def encrypt(data, key):
    """
    Encrypt the data using the provided key.
    Args:
    - data (str): The data to be encrypted.
    - key (str): The key to use for encryption.
    Returns:
    - str: The encrypted data.
    """
    derived_key = key_derivation(key)
    cipher = Fernet(derived_key)
    encrypted_data = cipher.encrypt(data.encode())
    return encrypted_data.decode()


def decrypt(encrypted_data, key):
    """
    Decrypt the encrypted_data using the provided key.
    Args:
    - encrypted_data (str): The data to be decrypted.
    - key (str): The key to use for decryption.
    Returns:
    - str: The decrypted data.
    """
    derived_key = key_derivation(key)
    cipher = Fernet(derived_key)
    decrypted_data = cipher.decrypt(encrypted_data.encode())
    return decrypted_data.decode()
