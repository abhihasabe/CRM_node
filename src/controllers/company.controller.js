
const CompanyModel = require('../models/company.model');

// get all Company list
exports.getCompanysList = (req, res)=> {
    //console.log('here all Company list');
    CompanyModel.getAllCompanys((err, companys) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Company', companys);
        res.send(companys)
    })
}

// get company by ID
exports.getCompanyByID = (req, res)=>{
    //console.log('get emp by id');
    CompanyModel.getCompanyByID(req.params.id, (err, company)=>{
        if(err)
        res.send(err);
        console.log('single employee data',company);
        res.send(company);
    })
}


// create new company
exports.createNewCompany = (req, res) =>{
    const companyReqData = new CompanyModel(req.body);
    console.log('companyReqData', companyReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CompanyModel.createCompany(companyReqData, (err, company)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Company Created Successfully', data: company.insertId})
        })
    }
}


// update company
exports.updateCompany = (req, res)=>{
    const companyReqData = new CompanyModel(req.body);
    console.log('companyReqData update', companyReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CompanyModel.updateCompany(req.params.id, companyReqData, (err, company)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Company updated Successfully'})
        })
    }
}


// delete company
exports.deleteCompany = (req, res)=>{
    CompanyModel.deleteCompany(req.params.id, (err, company)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Company deleted successully!'});
    })
}