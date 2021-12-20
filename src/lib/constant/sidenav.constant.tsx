import DashboardIcon from '@mui/icons-material/Dashboard'
import FeedbackIcon from '@mui/icons-material/Feedback'
import RequestPageIcon from '@mui/icons-material/RequestPage'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import { ISideNavconfig } from '@modal/sidenav.modal'

export const sideData: Array<ISideNavconfig> = [
  {
    title: 'Dashboard',
    path: '/admin-dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'Complaint Form',
    path: '/complaint',
    icon: <FeedbackIcon />,
  },
  // {
  //   title: 'Enquiry',
  //   path: '/enquiry',
  //   icon: <ChatBubbleOutlineIcon />,
  // },
  {
    title: 'Expenses',
    path: '/',
    icon: <RequestPageIcon />,
  },
  {
    title: 'Master',
    path: '/master',
    icon: <FolderOpenIcon />,
  },
]
