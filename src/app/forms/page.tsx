import Link from "next/link"
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function Forms () {
    

    return (
        <div>
          
            <h1><SaveAltIcon /> Enrollment Forms</h1>
            <p>In this page you will find all of the forms required for enrollment at Little Start Day Care.</p>
        <div>
           
            <a href="/Immunization_form.pdf" download="Immunization_Record_Form.pdf">
                
            California Pre-Kindergarten and School Immunization Record 
            </a>


            <p>Click on the link above to download the form or <Link href="https://www.cdph.ca.gov/Programs/CID/DCDC/CDPH%20Document%20Library/Immunization/CDPH-286.pdf" target="_blank" >click here</Link>click here to go to the California Departament of Public Health to complete the form and print.</p>

        </div>
        <div>
           
            <a href="/LIC9150.PDF" download="PARENT_NOTIFICATION_ADDITIONAL_CHILDREN_IN_CARE_LIC9150.pdf">
            PARENT NOTIFICATION ADDITIONAL CHILDREN IN CARE
            </a>
 

            <p>Click the image above to download the form or <Link href="https://www.cdss.ca.gov/cdssweb/entres/forms/English/LIC9150.PDF" target="_blank" >click here</Link>click here to go to the California Departament of Social Servicdes to complete the form and print.</p>

        </div>
        <div>
           
            <a href="/LIC627.PDF" download="LIC627.PDF">
            CONSENT FOR EMERGENCY MEDICAL TREATMENT
            </a>


            <p>Click the image above to download the form or <Link href="https://www.cdss.ca.gov/cdssweb/entres/forms/English/LIC627C.PDF" target="_blank" >click here</Link>click here to go to the California Departament of Social Services to complete the form and print.</p>

        </div>
        <div>
           
            <a href="/lic282.pdf" download="lic282.pdf">
            AFFIDAVIT REGARDING LIABILITY INSURANCE FOR FAMILY CHILD CARE HOME
            </a>


            <p>Click the image above to download the form or <Link href="https://www.cdss.ca.gov/cdssweb/entres/forms/english/lic282.pdf" target="_blank" >click here</Link>click here to go to the California Departament of Social Services to complete the form and print.</p>

        </div>
        <div>
           
            <a href="/LIC9166.PDF" download="LIC9166.PDF">
            NEBULIZER CARE CONSENT/VERIFICATION CHILD CARE FACILITIES
            </a>


            <p>Click the image above to download the form or <Link href="https://www.cdss.ca.gov/cdssweb/entres/forms/English/LIC9166.PDF" target="_blank" >click here</Link>click here to go to the California Departament of Social Services to complete the form and print.</p>

        </div>
        <div>
           
            <a href="/LIC700.PDF" download="LIC700.PDF">
            IDENTIFICATION AND EMERGENCY INFORMATION CHILD CARE CENTERS/FAMILY CHILD CARE HOMES
            </a>


            <p>Click the image above to download the form or <Link href="https://www.cdss.ca.gov/Portals/9/Additional-Resources/Forms-and-Brochures/2019/I-L/LIC700.pdf?ver=2019-10-24-143032-763" target="_blank" >click here</Link>click here to go to the California Departament of Social Services to complete the form and print.</p>

        </div>
        </div>
       
    )
}