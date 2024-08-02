// MUI Imports
import Tooltip from '@mui/material/Tooltip'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

// Third-party Imports
import classnames from 'classnames'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Style Imports
import styles from './styles.module.css'

type ButtonProProps = {
  label: string
  onClick?: any
}

const UpgradeToProButton = ({ label, onClick }: ButtonProProps) => {
  return (
    <div>
      <a className={styles.button} onClick={onClick} role='button'>
        {label}
        <span className={styles.buttonInner} />
      </a>
    </div>
  )
}

export default UpgradeToProButton
