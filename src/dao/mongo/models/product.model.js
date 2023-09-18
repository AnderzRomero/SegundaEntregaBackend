import mongoose from "mongoose";

const collection = "products";

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: Array,
            default: [],
            required:true,   
            index: true         
        },
        code: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        stock: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            index: true
        },
        thumbnail: {
            type: Array,
            default: []
        },
        status: {
            type: Boolean,
            default: true,
            index: true
        },
    },
    { timestamps: true }
);

const productModel = mongoose.model(collection, schema);

export default productModel;

