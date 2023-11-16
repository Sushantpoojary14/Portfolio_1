import { Document, Page, Text, View } from "@react-pdf/renderer";

// const styles = {
//   page: {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// };

const CVDoc = () => {
  return (
    <Document>
      <Page size="A4">
        <View
          style={{
            backgroundColor: "#b03921",
            width: "100%",
            height: "150px",
            display: "flex",
            flexDirection: "column",
            // margin: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#e2e2e2",
              fontSize: "38px",
              // margin: "auto",
            }}
          >
            Sushant Poojary
          </Text>
          <Text
            style={{
              color: "#e2e2e2",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            WEB DEVELOPER
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View  
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            // alignItems: "center",
          }}>
            <View>
              <Text>hh</Text>
            </View>
            <View>
              <Text>htt</Text>
            </View>
          </View>
          <View  
          style={{
            height: "100%",
            borderLeft:"1px solid #000000",

          }}>

          </View>
          <View  
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            // alignItems: "center",
          }}>
            <View>
              <Text>22</Text>
            </View>
            <View>
              <Text>htt2</Text>
            </View>
          V</View>
        </View>
      </Page>
    </Document>
  );
};

export default CVDoc;
