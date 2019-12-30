defmodule Tttgear.Router do
  use Antikythera.Router

  post "/api/book",  Book,  :create
end
