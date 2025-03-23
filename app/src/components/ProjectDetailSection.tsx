import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
// import { styles } from "../styles/reactPdfStyle";

function ProjectDetailSection() {
	const styles = StyleSheet.create({
		section: {
			marginBottom: 20,
		},
		header: {
			fontSize: 12,
			fontWeight: "bold",
			padding: 4,
			backgroundColor: "#00003C",
			color: "#fff",
			width: "100%",
			border: "1px solid #00003C",
		},
		flexRow: {
			display: "flex",
			flexDirection: "row",
		},
		flexColumn: {
			display: "flex",
			flexDirection: "column",
		},
		cell: {
			fontSize: 10,
			border: "1px solid #000",
			padding: 8,
		},
	});

	return (
		<View style={[styles.section]}>
			<Text style={[styles.header]}>Project Detail</Text>
			<View style={styles.flexRow}>
				<View style={[styles.flexColumn, { width: "80%" }]}>
					<View style={[styles.flexRow, { flex: 1 }]}>
						<Text style={[styles.cell, { flex: 1 }]}>Project title</Text>
						<Text style={[styles.cell, { flex: 1 }]}>Prinos</Text>
						<Text style={[styles.cell, { flex: 1 }]}>Owner/Operator</Text>
						<Text style={[styles.cell, { flex: 1 }]}>Energeon</Text>
					</View>
					<View style={[styles.flexRow, { flex: 1 }]}>
						<View style={[styles.flexColumn, { flex: 1 }]}>
							<View style={[styles.flexRow, { flex: 1 }]}>
								<Text style={[styles.cell, { flex: 1 }]}>Project code</Text>
								<Text style={[styles.cell, { flex: 1 }]}>WE24ENER001</Text>
							</View>
							<View style={[styles.flexRow, { flex: 1 }]}>
								<Text style={[styles.cell, { flex: 1 }]}>Period</Text>
								<Text style={[styles.cell, { flex: 1 }]}>February 2025</Text>
							</View>
						</View>
						<View style={[styles.flexRow, { flex: 1 }]}>
							<Text style={[styles.cell, { flex: 1 }]}>Location</Text>
							<Text style={[styles.cell, { flex: 1 }]}>Europe, Greece</Text>
						</View>
					</View>
				</View>
				<View
					style={[
						styles.cell,
						{
							display: "flex",
							alignItems: "center",
							width: "20%",
							textAlign: "center",
						},
					]}
				>
					<Image
						src="src/assets/images/qr_img.png"
						style={[{ width: 50, height: 50 }]}
					/>
					<Text>Scan here to review data</Text>
				</View>
			</View>
		</View>
	);
}

export default ProjectDetailSection;
