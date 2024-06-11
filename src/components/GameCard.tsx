import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticSore from './CriticSore'
import getCroppedImageUrl from '../services/image-url'
import GameCardContainer from './GameCardContainer'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
          <HStack justifyContent='space-between'>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticSore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  )
}

export default GameCard
