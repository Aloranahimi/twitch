function process (channel) {
  const cardId = `article[data-a-id="card-${channel.toLowerCase()}"]`
  const $card = document.querySelector(cardId)
  if (!$card) return

  const $feedbackCard = $card.querySelector('.feedback-card')
  const $feedbackCardButton = $feedbackCard.querySelector('button')

  $feedbackCardButton.click()

  const $notInterestedButton = $card.querySelector('button[data-a-target="rec-feedback-card-not-interested"]')
  $notInterestedButton.click()
}


for (channel of channels) {
  process(channel)
}
