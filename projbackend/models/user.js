var mongoose = require('mongoose');

  var userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true,
    },
    lastname: {
        type: String,
        maxlength: 32,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    userinfo:{
        type: String,
        trim: true,
    },
    //TODO: comeback here
    encry_password:{
        type: String,
        required: true,
    },
    salt: String,
    role:{
        type: Number,
        default: 0,
    },
    purchases:{
        type: Array,
        default: [],
    },
  }, {timestamps: true});


userSchema.method = {
    securePassword: function(plainpassword){
        if(!password) return "";
        try {
            return crypto
            .createHmap("sha256", this.salt)
            .update(plainpassword)
            .digest("hex");
        } catch (err) {
            return "";
        }
    }
}


module.exports = mongoose.model("User", userSchema);