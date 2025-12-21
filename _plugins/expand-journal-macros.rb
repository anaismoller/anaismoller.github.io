module Jekyll
  module ExpandJournalMacros
    # Map of LaTeX journal macros to full journal names
    JOURNAL_MACROS = {
      '\aap' => 'Astronomy and Astrophysics',
      '\aj' => 'The Astronomical Journal',
      '\apj' => 'The Astrophysical Journal',
      '\apjl' => 'The Astrophysical Journal Letters',
      '\apjs' => 'The Astrophysical Journal Supplement Series',
      '\jcap' => 'Journal of Cosmology and Astroparticle Physics',
      '\mnras' => 'Monthly Notices of the Royal Astronomical Society',
      '\nat' => 'Nature',
      '\pasa' => 'Publications of the Astronomical Society of Australia',
      '\pasp' => 'Publications of the Astronomical Society of the Pacific',
      '\prd' => 'Physical Review D',
      '\prl' => 'Physical Review Letters'
    }

    def expand_journal(input)
      return input if input.nil?

      # Replace each macro with its full name
      JOURNAL_MACROS.each do |macro, full_name|
        input = input.gsub(macro, full_name)
      end

      input
    end
  end
end

Liquid::Template.register_filter(Jekyll::ExpandJournalMacros)
