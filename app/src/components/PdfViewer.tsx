import {
	Document,
	Font,
	Image,
	Page,
	PDFDownloadLink,
	PDFViewer,
	Text,
	View,
	StyleSheet,
} from "@react-pdf/renderer";
import { Button } from "antd";
import ApprovalRecordSection from "./ApprovalRecordSection";
import ProjectDetailSection from "./ProjectDetailSection";
import ApproveTimeSection from "./ApproveTimeSection";

const font_source = "/src/assets/fonts/aeonikPro.woff";
Font.register({
	family: "AeonikPro",
	src: font_source,
});

export const styles = StyleSheet.create({
	document: {
		fontFamily: "AeonikPro",
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 20,
	},
	section: {
		marginBottom: 30,
	},
	title: {
		fontSize: 14,
		textAlign: "center",
	},
	logoImageContainer: {
		position: "absolute",
		right: 0,
		top: 0,
		textAlign: "right",
		justifyContent: "flex-end",
	},
	image: {
		width: 97.5,
		height: 27,
	},
	email: {
		fontSize: 8,
		textAlign: "right",
		color: "#A8A8A8",
	},
	tableHeader: {
		fontSize: 12,
		padding: 8,
		backgroundColor: "#00003C",
		color: "#fff",
		border: "1px solid #00003C",
	},
	tableFontSize: {
		fontSize: 10,
	},
	tableRow: {
		display: "flex",
		flexDirection: "row",
	},
	tableColumn: {
		display: "flex",
		flexDirection: "column",
	},
	tableCell: {
		padding: 8,
	},
	tableQRCell: {
		display: "flex",
		alignItems: "center",
		width: "20%",
	},
	QRSize: {
		width: 50,
		height: 50,
	},
	tableBorderLeftBottom: {
		borderLeft: "1px solid #000",
		borderBottom: "1px solid #000",
	},
	tableBorderRight: {
		borderRight: "1px solid #000",
	},
	footer: {
		position: "absolute",
		bottom: 30,
		right: 20,
		fontSize: 10,
	},
});

const MyDocument = () => (
	<Document>
		<Page size="A4" style={styles.document} orientation="landscape">
			<View fixed style={styles.section}>
				<Text style={styles.title}>Timesheet</Text>
				<View style={styles.logoImageContainer}>
					<Image style={styles.image} src={"/src/assets/images/logo.png"} />
					<Text style={styles.email}>
						accountspayables@elementalenergies.com
					</Text>
				</View>
			</View>

			<ProjectDetailSection />
			<ApproveTimeSection month={"2025-02"} />
			<ApprovalRecordSection />

			<Text style={styles.footer} fixed>
				Report Generated by John Doe on 08 Mar 2025 17:30:21 UTC
			</Text>
		</Page>
	</Document>
);

function PdfViewer() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: "20px",
			}}
		>
			{/* PDF View */}
			<PDFViewer width="794" height="600">
				<MyDocument />
			</PDFViewer>

			{/* Download PDF */}
			<PDFDownloadLink document={<MyDocument />} fileName="timesheet.pdf">
				{({ loading }) => (
					<Button loading={loading} type="primary">
						Download PDF
					</Button>
				)}
			</PDFDownloadLink>
		</div>
	);
}

export default PdfViewer;
