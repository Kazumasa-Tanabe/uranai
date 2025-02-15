Rails.application.routes.draw do
  devise_for :users

    resources :tweets do
        collection do
          get "question1"
          get "question2"
          get "question3"
          get "question4"
          get "result"
        end
      end
      root "tweets#question1" 
end
