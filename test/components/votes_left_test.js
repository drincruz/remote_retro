import React from "react"
import { shallow } from "enzyme"

import { VotesLeft } from "../../web/static/js/components/votes_left"

describe("VotesLeft component", () => {
  const stubUser = {}
  it("renders 5 Votes Left for a user that hasn't voted yet", () => {
    const votesLeft = shallow(
      <VotesLeft cumulativeVoteCountForUser={0} currentUser={stubUser} />
    )

    expect(votesLeft.text()).to.match(/5.*Votes Left/)
  })

  it("renders the Votes Left (4 minus their votes) for the currentUser", () => {
    const votesLeft = shallow(
      <VotesLeft cumulativeVoteCountForUser={1} currentUser={stubUser} />
    )

    expect(votesLeft.text()).to.match(/4.*Votes Left/)
  })

  it("renders singular Vote if the user has one vote left", () => {
    const votesLeft = shallow(
      <VotesLeft cumulativeVoteCountForUser={4} currentUser={stubUser} />
    )

    expect(votesLeft.text()).to.match(/1.*Vote Left/)
  })
})
