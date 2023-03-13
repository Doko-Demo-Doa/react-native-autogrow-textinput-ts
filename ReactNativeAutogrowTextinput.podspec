require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "ReactNativeAutogrowTextinput"
  s.version      = package['version']
  s.summary      = package['description']

  s.authors      = package['author']
  s.homepage     = package['homepage']
  s.license      = package['license']
  s.platforms    = { :ios => "9.0", :tvos => "9.2" }

  s.module_name  = 'ReactNativeAutogrowTextinput'

  s.source       = { :git => "https://github.com/wix/react-native-autogrow-textinput", :tag => "#{s.version}" }
  s.source_files  = "./ios/**/*.{h,m}"

  s.dependency 'React'
  s.frameworks = 'UIKit'
end
