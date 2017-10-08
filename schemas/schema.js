// Patient Schema
let Patient = new SchemaObject({
  _id: String,
  first_name: String,
  last_name: String
})

let Patient_Data = new SchemaObject({
  _id: String,
  patient_id: String,
  asset_id: String
})

let Asset = new SchemaObject({
  _id: String,
  asset_type: {type: String, enum: ["DNA"]},
  lookup: {type: Object, objectType: {
    entity: {type: String, enum: ["patient"]},
    entity_id: String
  }}
})

let Analysis = new SchemaObject({
  _id: String,
  created_on: String,
  completed: Boolean,
  script_ids: {type: Array, arrayType: {type: String}}
})

let Analysis_Script = new SchemaObject({
  _id: String,
  input_schema: Object,
  process_code: String,
  output_code: String
})

let Event_Stream = new SchemaObject({
  _id: String,
  created_on: String,
  event_object: Object
})
