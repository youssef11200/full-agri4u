const mongoose= require( "mongoose");
const { Schema } = mongoose;

const reviewSchema = mongoose.Schema({
  name: String ,
  rating:  Number,
   
 
  comment:  String,
 
  user: {
    type: mongoose.Schema.Types.ObjectId,
   
    ref: "user",
  },
}
);

const ProductionSchema = new Schema(
  {
    productName:  String,
    isBio:  Boolean,
    quantity: String,

    ph:  {
      type: Number,
      
      default: 5,
    },

    moisture: { String, },

    date: {
      type: Date,
      default: Date.now,
      
    },



    review: [reviewSchema],

    rating: {
      type: Number,
      
      default: 5,
    },

    numReviews: {
      type: Number,
      
      default: 0,
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      
      ref:"user",
      
  },

    thumbnail: {
      type: Object,
      url: {
        type: URL,
        
       
      },
      public_id: {
        type: String,
       
      },
    },
  },
  {
    timestamps: true,
  }
);
const Production = mongoose.model("Production", ProductionSchema);
module.exports = Production;
