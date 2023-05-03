import React from 'react';
import Section from '../Section';
import CertUnit from '../CertUnit';

import k8s from '../../assets/images/certificates/ckad-certified-kubernetes-application-developer.png';
import awsArch from '../../assets/images/certificates/aws-certified-solutions-architect-associate.png';
import awsDev from '../../assets/images/certificates/aws-certified-developer-associate.png';
import './styles.scss';

class CertsSection extends React.Component {
  render() {
    return (
      <Section className='certifications' title='Certifications'>
        <div className='certifications'>
          <div className='row'>
            <CertUnit logo={k8s} link={"https://www.credly.com/badges/60239cd9-9b90-4ccf-b818-9d0d46b9a832/public_url"}/>
            <CertUnit logo={awsArch} link={"https://www.credly.com/badges/9e8d8279-a23c-4cfe-b108-826cb8f68c2f/public_url"}/>
            <CertUnit logo={awsDev} link={"https://www.credly.com/badges/7b6760ab-abdc-4a61-8022-afd63f505317/public_url"}/>
          </div>
        </div>
      </Section>
    );
  }
}

export default CertsSection;
