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

# engine = create_engine("sqlite:///db/austinproject2.sqlite")
# session = Session(engine)

@app.route("/")
def index():
# """Return the homepage."""
    return render_template("index.html")

@app.route("/satisfactiondata")

def satisfaction():

    results = db.session.query(Satisfaction).all()

    allsatisfaction = []
    # print(type(results))
    for result in results:
        satisfaction_result = {}
        satisfaction_result['safety_day'] = result.safety_day
        allsatisfaction.append(satisfaction_result)
        # print(result.safety_day)
    return jsonify(allsatisfaction)


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