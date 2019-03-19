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
app.config['SQLALCHEMY_ECHO'] = True

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
print(Base.classes)
Aac = Base.classes.aac_outcomes
# class Aac(Base):
#     __tablename__ = 'aac_outcomes'

Satisfaction = Base.classes.city_satisfaction

# engine = create_engine("sqlite:///db/austinproject2.sqlite")
# session = Session(engine)

@app.route("/")
def index():
# """Return the homepage."""
    return render_template("index.html")

@app.route("/satisfactiondata")

def satisfaction():
    print(db.metadata)
    results = db.session.query(Satisfaction).all()

    allsatisfaction = []
    # print(type(results))
    for result in results:
        satisfaction_result = {}
        satisfaction_result['quality_of_life'] = result.quality_of_life
        satisfaction_result['animal_services'] = result.animal_services
        satisfaction_result['safety_day'] = result.safety_day
        satisfaction_result['safety_night'] = result.safety_night
        satisfaction_result['safety_parks'] = result.safety_parks
        satisfaction_result['year'] = result.year


        allsatisfaction.append(satisfaction_result)
        # print(result.safety_day)
    return jsonify(allsatisfaction)

@app.route("/aacdata")

def aac():
    # print(Aac)
    # randomName = db.session.query(Aac)
    results = db.session.query(Aac).all()
    # results = db.engine.execute("""SELECT aac_outcomes.id AS id, aac_outcomes.year AS year, aac_outcomes.animal_type AS animal_type, aac_outcomes.outcome_type AS outcome_type, aac_outcomes.age_upon_outcome AS age_upon_outcome, aac_outcomes.breed AS breed FROM aac_outcomes""")
    # for x in randomName:
    #     print(x)
    # print(randomName)
    allaac = []
    # print(type(results))
    # print(results)
    for result in results:
        # print(result.keys())
        aac_results = {}
        aac_results['year'] = result.year
        aac_results['animal_type'] = result.animal_type
        aac_results['outcome_type'] = result.outcome_type
        aac_results['breed'] = result.breed

        allaac.append(aac_results)
        # print(result)

    return jsonify(allaac)
    # return {}



if __name__ == "__main__":
    app.run(debug=True)