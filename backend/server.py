from flask import Flask, request
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('localhost', 27017)

db = client.billance
users = db.users

# region Routes


@app.route("/api/members", methods=['GET'])
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


@app.route("/users/register", methods=['POST'])
def user_register():
    data = request.data
    print(data)

@app.route("/users/login", methods=['GET'])
def user_login():
    data = request.data
    print(data)
# endregion


if __name__ == "__main__":
    app.run(debug=True)
