import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import ImageComponent from './ImageComponent';

const KYCReviewContent = (user: any) => {

    console.log("user", user)
    return (
        <Box>
            {/* Title */}
            <Typography variant="h5" gutterBottom>
                KYC Review Process
            </Typography>

            {/* User Information */}
            <Typography variant="h6" gutterBottom>
                User Information
            </Typography>
            <Typography variant="body1">
                Please carefully review the following details provided by the user.
            </Typography>
            <Typography variant="body2" mt={2}>
                <strong>Name:</strong> {user.personalDetails.name}<br />
                <strong>Email:</strong> {user.personalDetails.email}<br />
                <strong>Phone:</strong> {user.phone}<br />
                <strong>Date of Birth:</strong> {new Date(user.personalDetails.dateOfBirth).toLocaleDateString()}<br />
                <strong>Gender:</strong> {user.personalDetails.gender}
            </Typography>

            {/* KYC Documents */}
            <Typography variant="h6" mt={4} gutterBottom>
                KYC Documents
            </Typography>
            <Typography variant="body1">
                The user has submitted the following KYC documents for verification. Please ensure that the information on these documents matches the details provided above.
            </Typography>

            <CardContent>
                <Grid container gap={2} rowGap={5}>
                    <Grid item>
                        <ImageComponent src={'https://images.pexels.com/photos/9064715/pexels-photo-9064715.jpeg'} title={<Typography variant="body2" mt={2}>
                            <strong>Aadhar Number:</strong> {user.kycDetails.aadharNumber}<br />
                        </Typography>} subTitle={"Aadhar Proof Document"} />
                    </Grid>

                    <Grid item>
                        <ImageComponent src={"https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} title={<Typography variant="body2" mt={2}>
                            <strong>PAN Number:</strong> {user.kycDetails.panNumber}<br />
                        </Typography>} subTitle={"PAN Proof Document"} />
                    </Grid>

                </Grid>
            </CardContent>


            {/* Review and Decision */}
            <Typography variant="h6" mt={4} gutterBottom>
                Review and Decision
            </Typography>
            <Typography variant="body1">
                Please carefully consider the following before making your decision:
            </Typography>
            <Typography variant="body2" mt={2}>
                <strong>Document Authenticity:</strong> Ensure that the documents provided are genuine and unaltered.<br />
                <strong>Information Consistency:</strong> Verify that the details on the documents match the information provided by the user.<br />
                <strong>Compliance:</strong> Ensure that the user’s information complies with all relevant regulatory requirements.
            </Typography>

            <Typography variant="body1" mt={2}>
                Based on your review, you may choose to either <strong>Approve</strong> or <strong>Reject</strong> the KYC request.
            </Typography>

            {/* Approval Considerations */}
            <Typography variant="h6" mt={4} gutterBottom>
                Approval Considerations
            </Typography>
            <Typography variant="body2">
                If everything is in order, select <strong>Approve</strong> to verify the user’s KYC.<br />
                Approving the KYC will allow the user to fully access and utilize our platform's services.
            </Typography>

            {/* Rejection Considerations */}
            <Typography variant="h6" mt={4} gutterBottom>
                Rejection Considerations
            </Typography>
            <Typography variant="body2">
                If the documents are not authentic or the information is inconsistent, select <strong>Reject</strong>.<br />
                Provide a clear <strong>Remark</strong> explaining why the KYC was rejected so the user can address any issues.
            </Typography>

            {/* Final Note */}
            <Typography variant="body1" mt={4}>
                <strong>Note:</strong> Your decision is final and will directly impact the user’s ability to interact with our platform. Please ensure that all details are thoroughly reviewed before making your selection.
            </Typography>
        </Box>
    );
};

export default KYCReviewContent;
