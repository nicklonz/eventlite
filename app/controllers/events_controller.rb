class EventsController < ApplicationController
  def index
    @events = Event.order('start_datetimev ASC')
   end   
end