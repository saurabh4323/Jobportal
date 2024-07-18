import multer from 'multer';
import path from 'path';

const __dirname = path.resolve();

const storage = multer.diskStorage({

  destination: (req, file, cb) => { cb(null, "server/Public/CompanyLogos") },

  filename: (req, file, cb) => { cb( null, file.fieldname + "_" + Date.now() + path.extname(file.originalname) ) }
  
});



const CompanyLogoUpload = multer({
  storage: storage
});

export default CompanyLogoUpload
