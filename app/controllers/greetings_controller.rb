class GreetingsController < ApplicationController
  before_action :set_greeting, only: %i[show edit update destroy]

  def index
    @greetings = Greeting.all
  end

  def show; end

  def new
    @greeting = Greeting.new
  end

  def edit; end

  def create
    @greeting = Greeting.new(greeting_params)

    respond_to do |format|
      if @greeting.save
        format.html { redirect_to greeting_url(@greeting), notice: 'Message was successfully created.' }
        format.json { render :show, status: :created, location: @greeting }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @greeting.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @greeting.update(greeting_params)
        format.html { redirect_to greeting_url(@greeting), notice: 'Message was successfully updated.' }
        format.json { render :show, status: :ok, location: @greeting }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @greeting.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @greeting.destroy

    respond_to do |format|
      format.html { redirect_to greetings_url, notice: 'Message was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_greeting
    @greeting = Greeting.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def greeting_params
    params.require(:greeting).permit(:content)
  end
end
