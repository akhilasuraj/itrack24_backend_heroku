const express = require("express");
const charts = express.Router();
const cors = require("cors");
const Complain = require("../models/Complain");
charts.use(cors());

//BAR_CHART_DATA
charts.get("/category_count1",(req,res)=>{
  Complain.count({
      where:{
          category:"Solid waste-Public premises"
      }
  }).then((count1)=>{
      res.json(count1);
  });

});

charts.get("/category_count2",(req,res)=>{
    Complain.count({
        where:{
            category:"Tree Cutting Debris-Public premises"
        }
    }).then((count2)=>{
        res.json(count2);
    });
  
  });

  
charts.get("/category_count3",(req,res)=>{
    Complain.count({
        where:{
            category:"Decaying-Waste Public"
        }
    }).then((count3)=>{
        res.json(count3);
    });
  
  });

  
charts.get("/category_count4",(req,res)=>{
    Complain.count({
        where:{
            category:"Drainage Blockage-Road"
        }
    }).then((count4)=>{
        res.json(count4);
    });
  
  });


//PIE-CHART_DATA

charts.get("/category_countA",(req,res)=>{
    Complain.count({
        where:{
            category:"Mosquito breeding area-Public"
        }
    }).then((countA)=>{
        res.json(countA);
    });
  
  });

  
charts.get("/category_countB",(req,res)=>{
    Complain.count({
        where:{
            category:"Mosquito breeding area-Private"
        }
    }).then((countB)=>{
        res.json(countB);
    });
  
  });





module.exports=charts