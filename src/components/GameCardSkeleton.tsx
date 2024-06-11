import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer'

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height='300px'>
          <CardBody>
            <SkeletonText />
          </CardBody>
        </Skeleton>
      </Card>
    </GameCardContainer>
  )
}

export default GameCardSkeleton
