
module.exports = function patient(options) {
  var seneca = this;
  var plugin = "patient";

  seneca.add('role:patient,cmd:create', function(msg, respond) {
    let patient = seneca.make('patients')
    patient.first_name = msg.first_name;
    patient.last_name = msg.last_name;
    patient.save$(function(err, new_patient) {
      if(err) {
        console.log(err)
        respond(err, null);
      } else {
        console.log("New patient created: " + new_patient.id)
        respond(null, {_id: new_patient.id})
      }
    })
  })

  seneca.add('role:patient,cmd:list', function list_patients(msg, respond) {
    let patients = seneca.make('patients');
    patients.list$({}, function(err, patient_list) {
      if(err) {
        respond(err, null);
      } else {
        respond(null, {patients: patient_list})
      }
    });
  })

  return {name:plugin}
}
