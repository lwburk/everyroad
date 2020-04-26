import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { StravaButton } from './StravaButton'

export const Login = () => {
  const { user, getUser } = useContext(GlobalContext)

  useEffect(() => {
    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div class='bg-darken10 viewport-half'>
        <div class='flex-parent flex-parent--center-main pt36'>
          <div class='flex-child bg-white round relative w600'>
            <div class='px24 py24'>
              <div class='txt-l mb12'>Modal title</div>
              <div class='txt-m'>
                {user && (
                  <p>Hello, {user.name}</p>
                )}
                <StravaButton />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

