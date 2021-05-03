channels = ['CarlaLaubalo','Buuh', 'lukao150', 'MichellePuttini', ]

function processChannel (channel) {
  const cardId = `article[data-a-id="card-${channel.toLowerCase()}"]`
  const $card = document.querySelector(cardId)
  if (!$card) {
    console.log(channel, 'channel not found. Channel not likely online. Tryin again later.')
    return
  }

  const $feedbackCard = $card.querySelector('.feedback-card')
  const $feedbackCardButton = $feedbackCard.querySelector('button')

  $feedbackCardButton.click()

  const $notInterestedButton = $card.querySelector('button[data-a-target="rec-feedback-card-not-interested"]')
  $notInterestedButton.click()
  console.log(channel, 'marked as "not interested".')
}

$gameScroller = document.querySelector('[data-a-target="game-scroller"]')
function scroll() {
  $gameScroller.scrollIntoView(false)
  if (scrollTimes > 5) {
    clearScrollBottom()
    return
  }

  scrollTimes += 1
}

function clearScrollBottom() {
  clearInterval(scrollBottom)
  console.log('Scrolling done.')
  processChannels()
}

scrollTimes = 0

function processChannels() {
  console.log('Processing', channels.length, 'channels...')
  for (channel of channels) {
    processChannel(channel)
  }
  console.log('Done processing channels.')
  console.log('Check your twitch settings page to confirm')
}

function go() {
  console.clear()
  console.log('Scrolling to the bottom of twitch to populate channels...')
  scrollBottom = setInterval(scroll, 3000)
  return
}

go()
