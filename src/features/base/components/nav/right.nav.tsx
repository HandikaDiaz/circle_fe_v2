import { MetaCard } from '../cards/meta'
import { ProfileCard } from '../cards/profile'
import { SuggestionCard } from '../cards/suggestion'

function SideRightNav() {
  return (
    <>
      <ProfileCard />
      <SuggestionCard />
      <MetaCard />
    </>
  )
}

export default SideRightNav