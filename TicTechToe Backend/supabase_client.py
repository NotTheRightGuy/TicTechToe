
from supabase import create_client, Client
import os
from dotenv import load_dotenv
load_dotenv()

url: str = os.environ.get("URL")
key: str = os.environ.get("KEY")
supabase_client: Client = create_client(supabase_url=url, supabase_key=key)
