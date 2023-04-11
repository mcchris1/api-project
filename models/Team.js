import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Team = new Schema({
    name : { type: String, required: true },
    venue : { type: String },
    city : { type: String },
    abbreviation : { type: String },
    teamName : { type: String },
    locationName : { type: String },
    firstYearOfPlay : { type: String },
    division : { type: String },
    conference : { type: String },
    officialSiteUrl : { type: String },
    active : { type: Boolean },
});

export default mongoose.model("teams", Team);