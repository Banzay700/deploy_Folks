import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { UserInLoginType } from 'types'
import { Img, StackWrapper } from './EmployeesCarrouselItem.styled'

interface EmployeesItemProps extends UserInLoginType {
  isActive: boolean
  onClick: (id: string) => void
}
const EmployeesCarrouselItem: FC<EmployeesItemProps> = (props) => {
  const { id, firstName, secondName, userImage, isActive, onClick } = props

  const role =
    firstName === 'Emma' ? 'Administrator' : firstName === 'William' ? 'Courier' : 'Waiter'

  return (
    <StackWrapper spacing={1} isActive={isActive} onClick={() => onClick(id)}>
      <Box>
        <Img src={userImage} alt={secondName} isActive={isActive} />
      </Box>
      <Typography variant="h3" component="div" color={useTheme().palette.text.addition}>
        {`${firstName} ${secondName}`}
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight={400}
        component="div"
        color={useTheme().palette.text.addition}>
        {role}
      </Typography>
    </StackWrapper>
  )
}

export default EmployeesCarrouselItem
