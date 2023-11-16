import { PDFDownloadLink, } from '@react-pdf/renderer';
import CVDoc from './CVDoc';

const CVIndex = () => {
  return (
    <div>
    <PDFDownloadLink document={<CVDoc />} fileName="Sushant_CV.pdf">
      {({ loading }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>
  )
}

export default CVIndex
