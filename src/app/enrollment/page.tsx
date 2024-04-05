// pages/AboutUs.js
import Image from 'next/image';
import styles from './enrollment.module.css';
import Link from "next/link"
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function enrollment() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><SaveAltIcon /> Welcome to our Daycare Forms Section!</h1>
        <p> Here, parents can easily access and download all the necessary forms required for enrolling their child in our daycare. Each form is designed to ensure your child&apos;s safety, health, and well-being while under our care. Below, you&apos;ll find clickable links for each form. After filling out the required information, please print and bring the completed forms to our office. For your convenience, each form also includes a "Click Here" link that directs you to the official government website, where you can fill out and print the PDF version of the form.</p>
        <div>
            <ul>
                <li>
                    <h6>
                    California Pre-Kindergarten and School Immunization Record:
                    </h6>
                    <p>
                    Ensure your child meets California&apos;s immunization requirements for daycare and school enrollment.   
                    
                    </p>
                    <a href="/Immunization_form.pdf" download="Immunization_Record_Form.pdf">
                Download Form
            </a>
           <p><Link href="https://www.cdph.ca.gov/Programs/CID/DCDC/CDPH%20Document%20Library/Immunization/CDPH-286.pdf" target="_blank" >Fill Online</Link></p>
                </li>
                <li>
                    <h6>
                    PARENT NOTIFICATION ADDITIONAL CHILDREN IN CARE:
                    </h6>
                    <p>
                    Acknowledge and consent to the presence of additional children in our care setting.
                    
                    </p>
                    <a href="/LIC9150.PDF" download="PARENT_NOTIFICATION_ADDITIONAL_CHILDREN_IN_CARE_LIC9150.pdf">
            Download Form
            </a>
           <p><Link href="https://www.cdss.ca.gov/cdssweb/entres/forms/English/LIC9150.PDF" target="_blank" >Fill Online</Link></p>
                </li>
                <li>
                    <h6>
                    CONSENT FOR EMERGENCY MEDICAL TREATMENT: 
                    </h6>
                    <p>
                    Authorize the daycare to obtain emergency medical treatment for your child if necessary.
                    
                    </p>
                    <a href="/LIC627.PDF" download="LIC627.PDF">
            Download Form
            </a>
           <p><Link href="https://www.cdss.ca.gov/cdssweb/entres/forms/English/LIC627C.PDF" target="_blank" >Fill Online</Link></p>
                </li>
                <li>
                    <h6>
                    AFFIDAVIT REGARDING LIABILITY INSURANCE FOR FAMILY CHILD CARE HOME:
                    </h6>
                    <p>
                    A declaration concerning our daycare&apos;s liability insurance coverage.
                    
                    </p>
                    <a href="/lic282.pdf" download="lic282.pdf">
            Download Form
            </a>
           <p><Link href="https://www.cdss.ca.gov/cdssweb/entres/forms/english/lic282.pdf" target="_blank" >Fill Online</Link></p>
                </li>
                <li>
                    <h6>
                    NEBULIZER CARE CONSENT/VERIFICATION CHILD CARE FACILITIES:
                    </h6>
                    <p>
                    Provide consent and verification for nebulizer care at the daycare, if required for your child. 
                    
                    </p>
                    <a href="/LIC9166.PDF" download="LIC9166.PDF">
            Download Form
            </a>
           <p><Link href="https://www.cdss.ca.gov/cdssweb/entres/forms/English/LIC9166.PDF" target="_blank" >Fill Online</Link></p>
                </li>
                <li>
                    <h6>
                    IDENTIFICATION AND EMERGENCY INFORMATION CHILD CARE CENTERS/FAMILY CHILD CARE HOMES: 
                    </h6>
                    <p>
                    Essential contact, identification, and emergency information for your child.
                    
                    </p>
                    <a href="/LIC700.PDF" download="LIC700.PDF">
            Download Form
            </a>
           <p><Link href="https://www.cdss.ca.gov/Portals/9/Additional-Resources/Forms-and-Brochures/2019/I-L/LIC700.pdf?ver=2019-10-24-143032-763" target="_blank" >Fill Online</Link></p>
                </li>

            </ul>
            <p>
            Please make sure to complete each form with accurate and up-to-date information to comply with state regulations and to ensure the highest level of care for your child. If you have any questions or need assistance, do not hesitate to contact our office.
            </p>
            

        </div>
    </div>
  );
}