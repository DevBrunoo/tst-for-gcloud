import os

from cs50 import SQL
from flask import Flask, render_template, flash, jsonify, redirect, render_template, request, session


app = Flask(__name__)

app.config["TEMPLATES_AUTO_RELOAD"] = True

db = SQL("sqlite:///schedule.db")


@app.route("/schedule", methods=["GET", "POST"])
def index():
    if request.method == "POST":

        text = request.form.get("text")
        data = request.form.get("data")
        
        db.execute("INSERT INTO schedule (text, data) VALUES(?, ?)", text, data)
        return redirect("/schedule")
    else:
        schedule = db.execute("SELECT * FROM schedule")
        return render_template("schedule.html", schedule=schedule)

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":

        name = request.form.get("name")
        surname = request.form.get("surname")
        email = request.form.get("email")
        message = request.form.get("message")

        db.execute("INSERT INTO contact (name, surname, email, message) VALUES(?, ?, ?, ?)", name, surname, email, message)
        return render_template("contact.html", schedule=contact)
    else:
        schedule = db.execute("SELECT * FROM contact")
        return render_template("contact.html", schedule=contact)

@app.route('/')
def home():
    return render_template("homepage.html")

@app.route('/motivation')
def link():
    return render_template("motivation.html")



# put the site live
if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8000, debug=True)
