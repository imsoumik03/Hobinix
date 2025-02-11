import React, {useEffect} from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SongList from '../../components/music/SongList'
import CategoryBar from '../../components/appbars/CategoryBar'
import Appbar from '../../components/appbars/Appbar'
import Sidebar from '../../components/appbars/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getSavedSongs } from '../../actions/musicActions'
import Spinner from '../../components/utils/Spinner'

const SavedSongs = () => {
  const dispatch = useDispatch()
  const theme = useTheme();

  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const {savedSongs, loading} = useSelector(state => state.posts)

  useEffect(()=>{
    dispatch(getSavedSongs())
  }, [])
return (
    <div className="w-screen h-screen">
    <Appbar />
    <div className="flex w-screen" style={{ height: '90vh' }}>
        <Sidebar hidden={true} />
        <div
            className="flex flex-col w-full h-full"
            style={{
                width: `${
                    sm ? `${md ? '83vw' : '88vw'}` : '100vw'
                }`,
            }}
        >
            <CategoryBar saved />
            {loading ? <Spinner/> : <SongList songs={savedSongs} />}
          </div>
    </div>
  </div>
)
}

export default SavedSongs
