import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy import func

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/austinproject2.sqlite"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
Aac = Base.classes.aac_outcomes
Satisfaction = Base.classes.city_satisfaction


@app.route("/")
def index():
# """Return the homepage."""
    return render_template("index.html")

@app.route("/satisfactiondata")
def data():
    print("howdy!")
    sel = func.count(Satisfaction.safety_day)
    results = db.Session.query(*sel).all()
    df = pd.DataFrame(results, columns=['safety_day'])
    return jsonify(df.to_dict(orient="records"))

# @app.route("/api/pals")
# def pals():
#     results = db.session.query(Pet.type, func.count(Pet.type)).group_by(Pet.type).all()

#     pet_type = [result[0] for result in results]
#     age = [result[1] for result in results]

#     trace = {
#         "x": pet_type,
#         "y": age,
#         "type": "bar"
#     }

#     return jsonify(trace)

# def satisfaction(safety):

#     results = db.session.query(satisfaction.safety_day).all()

#     allsatisfaction = []
#     for result in results:
#         allsatisfaction.append({
#             "safetyday": result[0],
#         })
#     return jsonify(allsatisfaction)


# @app.route("/satisfaction")
# def samples(sample):
#     """Return `otu_ids`, `otu_labels`,and `sample_values`."""
#     stmt = db.session.query(satisfaction).statement
#     df = pd.read_sql_query(stmt, db.session.bind)

#     # Filter the data based on the sample number and
#     # only keep rows with values above 1
#     sample_data = df.loc[df[sample] === "Agree", ["otu_id", "otu_label", sample]]
#     # Format the data to send as json
#     data = {
#         "otu_ids": sample_data.otu_id.values.tolist(),
#         "sample_values": sample_data[sample].values.tolist(),
#         "otu_labels": sample_data.otu_label.tolist(),
#     }
#     return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)