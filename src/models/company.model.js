var dbConn  = require('../../config/db.config');

var Companys = function(companys){
    this.company_name     =   companys.company_name;
    this.company_email    =   companys.company_email;
    this.company_address  =   companys.company_address;
    this.company_branch   =   companys.company_branch;
    this.company_website  =   companys.company_website;
    this.company_type     =   companys.company_type;
    this.company_info     =   companys.company_info;
}

// get all companys
Companys.getAllCompanys = (result) =>{
    dbConn.query('SELECT * FROM companys', (err, res)=>{
        if(err){
            console.log('Error while fetching companys', err);
            result(null,err);
        }else{
            console.log('companys fetched successfully');
            result(null,res);
        }
    })
}

// get company by ID from DB
Companys.getCompanyByID = (id, result)=>{
    dbConn.query('SELECT * FROM companys WHERE cId=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching companys by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new company
Companys.createCompany = (companyReqData, result) =>{
    dbConn.query('INSERT INTO companys SET ? ', companyReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('company created successfully');
            result(null, res)
        }
    })
}

// update company
Companys.updateCompany = (id, companyReqData, result)=>{
    dbConn.query("UPDATE companys SET company_name=?,company_email=?,company_address=?,company_branch=?,company_website=?,company_type=?,company_info=? WHERE cId = ?", [companyReqData.company_name,companyReqData.company_email,companyReqData.company_address,companyReqData.company_branch,companyReqData.company_website,companyReqData.company_type,companyReqData.company_info, id], (err, res)=>{
        if(err){
            console.log('Error while updating the company');
            result(null, err);
        }else{
            console.log("Companys updated successfully");
            result(null, res);
        }
    });
}

// delete comapny
Companys.deleteCompany = (id, result)=>{
    dbConn.query('DELETE FROM companys WHERE cId=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the companys');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = Companys;