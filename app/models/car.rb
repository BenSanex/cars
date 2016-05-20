class Car < ActiveRecord::Base
	belongs_to :user

  def get_resale
    uri = URI('https://api.edmunds.com/v1/api/tmv/tmvservice/calculateusedtmv?styleid='+self.style_id.to_s+'&condition=Average&mileage=10000&zip=60601&fmt=json&api_key='+API_KEY)
    raw_json = Net::HTTP.get(uri)
    parsed_data = JSON.parse(raw_json, symbolize_names: true)
    return parsed_data[:tmv][:nationalBasePrice][:usedPrivateParty]

  end

  def recalls
    uri = URI('https://api.edmunds.com/v1/api/maintenance/recall/'+self.style_id.to_s+'?fmt=json&api_key='+API_KEY)
    raw_json = Net::HTTP.get(uri)
    parsed_data = JSON.parse(raw_json, symbolize_names: true)
    return parsed_data[:recallHolder]
  end

end

