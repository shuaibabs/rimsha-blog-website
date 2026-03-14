'use client'

import { Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export function SocialShare({ title, url }: { title: string, url: string }) {
  const { toast } = useToast()

  const encodedTitle = encodeURIComponent(title)
  const fullUrl = `https://your-website.com${url}`

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${fullUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`,
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      toast({
        title: 'Link Copied!',
        description: 'The post URL has been copied to your clipboard.',
      })
    })
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      <Button variant="outline" size="icon" asChild>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <Facebook className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Copy link">
        <LinkIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
