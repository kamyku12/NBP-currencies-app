from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('localhost', 27017)

db = client.billance
users = db.users

# region Routes


@app.route("/api/members", methods=['GET'])
def members():
    return {"members": ["Member1", "Member2", "Member3"]}
# endregion


if __name__ == "__main__":
    app.run(debug=True)
