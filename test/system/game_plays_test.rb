require "application_system_test_case"

class GamePlaysTest < ApplicationSystemTestCase
  setup do
    @game_play = game_plays(:one)
  end

  test "visiting the index" do
    visit game_plays_url
    assert_selector "h1", text: "Game Plays"
  end

  test "creating a Game play" do
    visit game_plays_url
    click_on "New Game Play"

    fill_in "Name", with: @game_play.name
    click_on "Create Game play"

    assert_text "Game play was successfully created"
    click_on "Back"
  end

  test "updating a Game play" do
    visit game_plays_url
    click_on "Edit", match: :first

    fill_in "Name", with: @game_play.name
    click_on "Update Game play"

    assert_text "Game play was successfully updated"
    click_on "Back"
  end

  test "destroying a Game play" do
    visit game_plays_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Game play was successfully destroyed"
  end
end
