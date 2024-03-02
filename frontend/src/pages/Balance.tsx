import UserAssets from "@/components/User/UserAssets"
import { Typography } from "@mui/material"
import { Stack } from "@mui/system"

function Balance() {
    return <Stack>
        <Typography variant='h2'>
            Hello user
        </Typography>
        {/* TODO: change value to value from context */}
        <Typography mb='1rem'>
            Your portfolio balance is: balance
        </Typography>
        <Typography>
            Assets:
        </Typography>
        <UserAssets />

    </Stack>
}

export default Balance